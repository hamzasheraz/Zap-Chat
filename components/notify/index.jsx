import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from 'lucide-react'

const Notify = ({ status, message }) => {
  let alertVariant, icon, alertMessage;

  switch (status) {
    case 'verified':
      alertVariant = "default";
      icon = <CheckCircle2 className="h-4 w-4" />;
      alertMessage = "Your email has been successfully verified!";
      break;
    case 'error':
      alertVariant = "destructive";
      icon = <AlertCircle className="h-4 w-4" />;
      alertMessage = "There was an error verifying your email. The link may be invalid or expired.";
      break;
    case 'no-token':
      alertVariant = "default";
      icon = <AlertCircle className="h-4 w-4" />;
      alertMessage = "No verification token found. Please check your email for the verification link.";
      break;
    default:
      alertVariant = "default";
      icon = <AlertCircle className="h-4 w-4" />;
      alertMessage = message || "An unexpected error occurred.";
  }

  return (
    <Alert variant={alertVariant} className={status === 'verified' ? "bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100" : "bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"}>
      {icon}
      <AlertDescription>{alertMessage}</AlertDescription>
    </Alert>
  )
}

export default Notify;
