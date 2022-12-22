import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'


export function Form() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { chatId } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMessage(chatId, text))

        setText('')
    }


    return (
        <>
            <h1>Форма</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />

                <Button type="submit">Добавить сообщение</Button>

            </form>

        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}