import React from 'react'

const MyFooter = () => {
  return (
    <>
    <footer className="bg-[var(--color-secondary)] text-[var(--color-text-primary)] py-4 text-center">
        <p>&copy; {new Date().getFullYear()} KEno. All rights reserved.</p>
    </footer>
    </>
  )
}

export default MyFooter
