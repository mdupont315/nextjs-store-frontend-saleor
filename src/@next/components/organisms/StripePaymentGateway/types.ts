import { ICardData, IFormError, IPaymentGatewayConfig } from "@types";

export interface IProps {
  /**
   * Payment gateway client configuration.
   */
  config: IPaymentGatewayConfig[];
  /**
   * Form reference on which payment might be submitted.
   */
  formRef?: React.RefObject<any>;
  /**
   * Form id on which payment might be submitted.
   */
  formId?: string;
  /**
   * Errors returned by the payment gateway.
   */
  errors?: IFormError[];
  /**
   * Method called after the form is submitted. Passed token attribute will be used to create payment.
   */
  processPayment: (token: string, cardData?: ICardData) => void;
  /**
   * Method called when gateway error occured.
   */
  onError: (errors: IFormError[]) => void;

  isBankSelected?: boolean;
  setIsBankSelected?: React.Dispatch<React.SetStateAction<boolean>>;
}
