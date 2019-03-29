import React from 'react';

const linksArr = [
  'Dashboard',
  'Отчёты',
  'Статистика',
  'Офферы',
  'Инструменты',
  'Разработчикам',
  'Сервисы',
  'Финансы'
]

export const Aside = () => {
  return (
    <aside>
      <svg className="logo" width="27" height="40" viewBox="0 0 31 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0667 28.8071H19.2C18.611 28.8071 18.1334 28.3295 18.1334 27.7404C18.1334 27.1513 18.1334 22.4 18.1334 22.4H24.3938C24.687 22.4 24.9372 22.1881 24.9856 21.899L25.4095 19.3657C25.4707 18.9999 25.1886 18.6667 24.8177 18.6667H14.4C14.4 18.6667 14.4 25.0894 14.4 27.7404C14.4 30.3914 16.549 32.5404 19.2 32.5404H22.9334V35.3167C21.0862 36.0184 19.5055 36.2667 17.4687 36.2667C12.1509 36.2667 9.25863 33.4809 9.07609 28.2737C9.0213 26.7106 9.06669 25.6048 9.06669 18.6667H1.02409C0.730958 18.6667 0.480691 18.8785 0.432358 19.1677L0.00835795 21.701C-0.0527754 22.0668 0.229225 22.4 0.600158 22.4H5.33336L5.34189 28.2737C5.44376 31.7699 6.55136 34.7127 8.56203 36.7394C10.6782 38.8725 13.7581 40 17.4687 40C20.595 40 22.9638 39.4833 26.0547 38.0379C26.4288 37.8629 26.6667 37.4859 26.6667 37.0729V29.4071C26.6667 29.0757 26.3981 28.8071 26.0667 28.8071Z" />
        <path d="M1.8497 14.9333H9.0667V6.92265L14.4 5.03405V14.9333H25.6426C25.9358 14.9333 26.186 14.7214 26.2344 14.4323L26.6583 11.899C26.7195 11.5332 26.4374 11.2 26.0665 11.2H18.1334V0.600448C18.1334 0.186248 17.7236 -0.103352 17.333 0.0349147L5.73303 4.14265C5.4935 4.22751 5.33337 4.45411 5.33337 4.70825V11.2H2.27363C1.9805 11.2 1.73023 11.4118 1.68183 11.701L1.25797 14.2343C1.1967 14.6001 1.47877 14.9333 1.8497 14.9333Z" />
      </svg>

      <nav>
        {linksArr.map(item => <a href="#" key={item} title={item} className={item === 'Сервисы' ? 'active' : undefined}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" />
          </svg>
        </a>)}
      </nav>
    </aside>
  )
}
