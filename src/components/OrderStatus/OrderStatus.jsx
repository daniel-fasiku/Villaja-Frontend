import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OrderStatus = ({ property1, className, overlapGroupClassName }) => {
  return (
    <div className={`order-status ${property1} ${className}`}>
      {["cancelled", "delivered", "ready-to-ship", "shipped"].includes(property1) && (
        <div className={`overlap-group ${overlapGroupClassName}`}>
          {property1 === "delivered" && <img className="vector" alt="Vector" src="/img/vector.svg" />}
        </div>
      )}

      {property1 === "NEW" && (
        <img className={`ellipse ${overlapGroupClassName}`} alt="Ellipse" src="/img/ellipse-24.svg" />
      )}

      <div className="delievered">
        {property1 === "delivered" && <>Delievered</>}

        {property1 === "ready-to-ship" && <>Ready to Ship</>}

        {property1 === "shipped" && <>Shipped</>}

        {property1 === "cancelled" && <>Cancelled</>}

        {property1 === "NEW" && <>NEW</>}
      </div>
    </div>
  );
};

OrderStatus.propTypes = {
  property1: PropTypes.oneOf(["NEW", "shipped", "ready-to-ship", "delivered", "cancelled"]),
};
