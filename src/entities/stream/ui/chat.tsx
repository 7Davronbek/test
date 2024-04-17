'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { usePubSub } from '@videosdk.live/react-sdk'
import sx from './style/chat.module.scss'

const Chat = () => {

  const topic = 'CHAT'
  const [input, setInput] = useState('')



  const { publish, messages } = usePubSub(topic, )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    publish(input, { persist: true })
    setInput('')
    // publish(inputRef.current.value, { persist: true })
    // inputRef.current.value = ''
  }
  useEffect(() => {
  }, [messages])

  return (
    <div className={sx.chat}>
      <div className={sx.message}>
        {messages.map(item => {
          return (
            <div className={sx.wrap} key={item.id}>
              <h6>{item.senderName}</h6>
              <p>{item.message}</p>
            </div>
          )
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
        <button type={'submit'}>Send</button>
      </form>
    </div>
  )
}

export default Chat