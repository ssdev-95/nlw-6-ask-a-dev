import { BaseHTMLAttributes } from 'react';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import { Modal } from '@material-ui/core';

import { modalStyle } from '../../styles/modal.styles';

type IModal= BaseHTMLAttributes<HTMLDivElement> & {
    isOpen?: boolean;
};

export const CModal = ({ children, isOpen=false }: IModal) => {
    const { overlay, modal, icon } = modalStyle();

    return (
        <Modal className={overlay} open={isOpen}>
            <div className={modal}>
                <ReportOutlinedIcon className={icon} />
                { children }
            </div>
        </Modal>
    );
}