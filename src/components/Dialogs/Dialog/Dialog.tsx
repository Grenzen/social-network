import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'
import { selectDialog } from '../../../store/actions/dialogs'
import { ActionDialogsType, DialogType } from '../../../store/reducers/dialogs'

type PropTypes = {
    dialog: DialogType
    dispatch: (action: ActionDialogsType) => void
}

export const Dialog: React.FC<PropTypes> = React.memo((
    {
        dialog, dispatch,
    }) => {
    const itemClassName = `${ s.item }`
    const onClickHandler = () => dispatch(selectDialog(dialog.id))

    return (
        <li
            className={ itemClassName }
            onClick={ onClickHandler }
        >
            <NavLink
                className={ s.link }
                to={ `/dialogs/${ dialog.id }` }
                activeClassName={ s.active }
            >
                { dialog.name }
            </NavLink>
        </li>
    )
})