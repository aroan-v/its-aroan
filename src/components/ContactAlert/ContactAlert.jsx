import React from 'react'

function ContactAlert({ showAlert, messageRef }) {
  const message = messageRef?.current || ''

  if (!message) {
    return
  }
  return (
    <div className="h-5 w-full">
      {/* Alert */}
      <div className="relative mx-auto flex w-fit items-center justify-center">
        <div
          role="alert"
          className={`border-accent flex items-center gap-2 rounded-md border bg-black p-2 text-sm text-white shadow-md transition-all duration-500 ${showAlert ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
      </div>
    </div>
  )
}
export default ContactAlert
