import "../styles/index.scss"


export const metadata = {
  title: 'Artier Medical – New Age New Life',
  description: 'Artier Medical – New Age New Life',
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
