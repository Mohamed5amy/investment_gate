import "../styles/index.scss"


export const metadata = {
  title: 'Investment Gate',
  description: 'Investment Gate – Rwanda – Malawi – Congo (DRC)',
  icons : {
    icon : [
      '/images/favicon.png'
    ]
  }
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
