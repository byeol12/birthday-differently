import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: '생일 대신 마음을 나눠주세요',
      },
      {
        name: 'description',
        content: '9월 25일, 생일 선물 대신 마음 가는 곳에 작은 후원을 부탁해요.',
      },
      {
        property: 'og:title',
        content: '생일 대신 마음을 나눠주세요',
      },
      {
        property: 'og:description',
        content: '물건 대신 후원으로 축하받고 싶은 작은 생일 소원이에요.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
