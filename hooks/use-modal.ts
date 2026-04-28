import React, { useEffect, useRef } from 'react';

export function useModal(isOpen: boolean, onClose: () => void) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (isOpen && dialog) {
			if (!dialog.open) dialog.showModal();
		} else if (dialog) {
			if (dialog.open) dialog.close();
		}
	}, [isOpen]);

	const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === dialogRef.current) {
			onClose();
		}
	};

	return { dialogRef, handleBackdropClick };
}
