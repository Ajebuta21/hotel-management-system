import React from "react";
import { globalStyles } from "../global/globalStyles";

type ConfirmCancelModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmCancelModal: React.FC<ConfirmCancelModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={globalStyles.modal}>
      <div className={globalStyles.modalContent}>
        <h2 className={globalStyles.heading}>Confirm Cancellation</h2>
        <p className="text-xs text-primary font-light text-center">
          Are you sure you want to cancel this reservation?
        </p>
        <div className="flex gap-2">
          <button className={globalStyles.button} onClick={onConfirm}>
            Yes, Cancel
          </button>
          <button className={globalStyles.buttonAlt} onClick={onCancel}>
            No, Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancelModal;
