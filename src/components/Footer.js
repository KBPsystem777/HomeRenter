const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <div className="container footer">
      <p className="text-center">HomeRenter {currentYear} | KBPsystem</p>
    </div>
  )
}

export default Footer
