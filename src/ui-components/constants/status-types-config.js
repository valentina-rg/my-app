import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const types = {
  success: {
    Icon: CheckCircleIcon,
    classes: {
      light: "bg-green-50",
      regular: "bg-green-100",
      textRegular: "text-green-400",
      textExtraBold: "text-green-800",
      textSemibold: "text-green-600",
      textBold: "text-green-700",
      hoverLight: "hover:bg-green-100",
      focusOffset: "focus:ring-offset-green-50",
      focus: "focus:ring-green-600",
    },
  },
  error: {
    Icon: XCircleIcon,
    classes: {
      light: "bg-red-50",
      regular: "bg-red-100",
      textRegular: "text-red-400",
      textExtraBold: "text-red-800",
      textSemibold: "text-red-600",
      textBold: "text-red-700",
      hoverLight: "hover:bg-red-100",
      focusOffset: "focus:ring-offset-red-50",
      focus: "focus:ring-red-600",
    },
  },
  warning: {
    Icon: ExclamationTriangleIcon,
    classes: {
      light: "bg-yellow-50",
      regular: "bg-yellow-100",
      textRegular: "text-yellow-400",
      textExtraBold: "text-yellow-800",
      textSemibold: "text-yellow-600",
      textBold: "text-yellow-700",
      hoverLight: "hover:bg-yellow-100",
      focusOffset: "focus:ring-offset-yellow-50",
      focus: "focus:ring-yellow-600",
    },
  },
  info: {
    Icon: InformationCircleIcon,
    classes: {
      light: "bg-blue-50",
      regular: "bg-blue-100",
      textRegular: "text-blue-400",
      textExtraBold: "text-blue-800",
      textSemibold: "text-blue-600",
      textBold: "text-blue-700",
      hoverLight: "hover:bg-blue-100",
      focusOffset: "focus:ring-offset-blue-50",
      focus: "focus:ring-blue-600",
    },
  },
};

export default types;
