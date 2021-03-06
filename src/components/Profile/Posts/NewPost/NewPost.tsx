import React, { FormEvent, ChangeEvent, KeyboardEvent } from 'react'
import { FormButton } from '../../../FormButton/FormButton'
import s from './NewPost.module.css'
import { MapDispatchPropType } from '../../../../Pages/ProfilePage/ProfilePage'

type NewPostType = {
    newPostText: string
} & MapDispatchPropType

export const NewPost: React.FC<NewPostType> = React.memo((
    {
        newPostText,
        changeNewPostTextCallback, addNewPostCallback,
    }) => {

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addNewPostCallback()
    }
    const onEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            addNewPostCallback()
        }
    }

    const onChangePostText = (event: ChangeEvent<HTMLTextAreaElement>) =>
        changeNewPostTextCallback(event.currentTarget.value)

    return (
        <form
            className={ s.newPostContainer }
            onSubmit={ onSubmit }
        >
            <textarea
                className={ s.text }
                rows={ 5 }
                value={ newPostText }
                placeholder="Write text..."
                onChange={ onChangePostText }
                onKeyPress={ onEnterPress }
            />
            <FormButton
                value="Add post"
                position="end"
                primary={ true }
                size="medium"
            />
        </form>
    )
})