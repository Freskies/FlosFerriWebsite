import React, { useEffect, useRef } from 'react';

/**
 * Custom hook to manage the state and behavior of a native HTML dialog element.
 * Handles opening/closing the modal and closing it when clicking on the backdrop.
 *
 * @param isOpen - Boolean flag indicating if the modal should be open.
 * @param onClose - Callback function to be executed when the modal is requested to close.
 * @returns An object containing a ref to the dialog element and a click handler for the backdrop.
 */
export function useModal (isOpen: boolean, onClose: () => void) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		if (isOpen) {
			if (!dialog.open) dialog.showModal();
		} else if (dialog.open) dialog.close();
	}, [isOpen]);

	const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === dialogRef.current)
			onClose();
	};

	return { dialogRef, handleBackdropClick };
}
