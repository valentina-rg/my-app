import {Fragment, useCallback, useEffect, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import types from "./constants/status-types-config";


const modalWidthOptions = {
    small: 'sm:max-w-md',
    normal: 'sm:max-w-lg',
    large: 'sm:max-w-3xl',
    ms: 'sm:max-w-2xl',
    xl: 'sm:max-w-6xl',
    custom: 'sm:max-w-fit',
    full: 'sm:max-w-full'
}

function Modal({
                   title,
                   description,
                   children,
                   opened,
                   onDismiss,
                   onConfirm,
                   onExit,
                   confirmText = "OK",
                   dismissText = "ANNULLA",
                   type = "info",
                   modalWidth = 'large'
               }) {
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);

    const dismiss = useCallback(() => {
        if (onDismiss) {
            onDismiss();
        }
        setOpen(false);
    }, [onDismiss]);

    const confirm = useCallback(() => {
        if (onConfirm) {
            onConfirm();
        }
        setOpen(false);
    }, [onConfirm]);

    useEffect(() => {
        setOpen(opened);  // necessary to trigger the animation
    }, [opened]);

    if (!children && !types[type]) {
        throw new Error("missing notification type");
    }

    const {
        Icon,
        classes: {textSemibold, regular},
    } = types[type];

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    onClose={() => {
                        setOpen(false);
                        onExit();
                    }}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => {
                                if (opened)         // additional check in case of toggle actions
                                    onExit();
                            }}
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                className={`inline-block align-bottom bg-white rounded-3xl px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle ${modalWidthOptions[modalWidth]} sm:w-full sm:p-6`}>
                                <div className="block absolute top-0 right-0 pt-4 pr-4">
                                    <button
                                        type="button"
                                        className="bg-white rounded-3xl text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-am-500"
                                        onClick={() => {
                                            setOpen(false);
                                            onExit();
                                        }}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div>
                                    {children ? (
                                        children
                                    ) : (
                                        <Fragment>
                                            <div
                                                className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${regular}`}
                                            >
                                                <Icon
                                                    className={`h-6 w-6 ${textSemibold}`}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                >
                                                    {title}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">{description}</p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )}
                                </div>
                                {onDismiss || onConfirm ? (
                                    <div
                                        className={`mt-5 ${
                                            onDismiss
                                                ? "sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3"
                                                : null
                                        } sm:grid-flow-row-dense`}
                                    >
                                        {onDismiss ? (
                                            <button
                                                type="button"
                                                className="mt-3 w-full inline-flex justify-center rounded-3xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-am-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                                onClick={dismiss}
                                                ref={cancelButtonRef}
                                            >
                                                {dismissText}
                                            </button>
                                        ) : null}
                                        {onConfirm ? (
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-am-600 text-base font-medium text-white hover:bg-am-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-am-500 sm:col-start-2 sm:text-sm"
                                                onClick={confirm}
                                            >
                                                {confirmText}
                                            </button>
                                        ) : null}
                                    </div>
                                ) : null}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default Modal;
