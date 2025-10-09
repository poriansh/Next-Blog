"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  hideFooter,
} from "@heroui/react";

function ModalComponent({
  open,
  onOpenChange,
  title,
  onSubmit,
  children,
  isLoading,
  description = "",
  size = "2xl",
  hideFooter = false,
}) {
  return (
    <Modal size={size} isOpen={open} onOpenChange={onOpenChange}>
      <ModalContent className="scrollbar-hidden sm:my-0  my-0 h-min max-h-[calc(100%-2rem)] overflow-auto">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <p className=" font-bold text-base">{title}</p>
              <p className=" text-sm lg:text-base">{description}</p>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            {!hideFooter && (
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                <Button
                  isLoading={isLoading}
                  color="default"
                  variant="shadow"
                  onPress={() => {
                    if (onSubmit) {
                      onSubmit();
                    } else {
                      onClose();
                    }
                  }}
                >
                  ثبت
                </Button>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
