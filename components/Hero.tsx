import Image from 'next/image';

export default function Hero() {
  return (
    <main className='overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
          <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <h1 className='text-4xl font-medium tracking-tight text-gray-900'>Invest at the perfect time.</h1>
            <p className='mt-6 text-lg text-gray-600'>
              By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize
              profit, and exactly when to sell to avoid painful losses.
            </p>
            <div className=''>
              <div className='mt-8 flex flex-wrap gap-x-6 gap-y-4'>
                <button className='bg-black rounded-lg'>
                  <svg viewBox='0 0 120 40' aria-hidden='true' className='h-10 text-white'>
                    <path
                      fill='currentColor'
                      d='M24.769 20.301a4.947 4.947 0 0 1 2.357-4.152 5.066 5.066 0 0 0-3.992-2.157c-1.679-.177-3.307 1.004-4.163 1.004-.872 0-2.19-.987-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.349-.491 8.27 1.361 10.976.927 1.326 2.01 2.806 3.428 2.753 1.387-.057 1.905-.884 3.58-.884 1.658 0 2.144.884 3.59.851 1.489-.024 2.426-1.331 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.635 4.635 0 0 0-1.143 3.36 4.099 4.099 0 0 0 3.236-1.53ZM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356Zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.068 3.068 0 0 1-2.848-1.584h-.043v4.485H46.63V21.442h1.8v1.506h.033a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.039-2.393-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.584h-.043v4.485h-1.859V21.442h1.799v1.506h.034a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.621Zm-1.91 0c0-1.834-.947-3.039-2.392-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638Zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106ZM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.636c.214 0 .428.023.637.07v1.738a2.594 2.594 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764Zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.293 2.293 0 0 0-2.306 2.298ZM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.731h2.155Zm-1.228 5.123h1.125a1.877 1.877 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.133h-1.125v4.28ZM41.68 12.445a2.133 2.133 0 1 1 4.248 0 2.132 2.132 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.547-1.209-1.547-.772 0-1.206.57-1.206 1.547 0 .984.434 1.55 1.207 1.55.769 0 1.208-.57 1.208-1.55ZM51.573 14.697h-.922l-.93-3.316h-.07l-.927 3.316h-.913l-1.242-4.503h.902l.806 3.436h.067l.925-3.436h.853l.926 3.436h.07l.803-3.436h.889l-1.237 4.503ZM53.853 10.195h.856v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM59.094 8.437h.888v6.26h-.888v-6.26ZM61.218 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.248 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.772 0-1.207.57-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.425c0-.81.604-1.278 1.676-1.344l1.22-.07v-.39c0-.475-.315-.744-.922-.744-.497 0-.84.183-.939.5h-.86c.09-.773.818-1.269 1.84-1.269 1.128 0 1.765.562 1.765 1.514v3.076h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.347Zm2.895-.385v-.376l-1.1.07c-.62.041-.9.252-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.984ZM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.711h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.9-1.869-2.327Zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.939-.468-1.53-1.212-1.53-.748 0-1.203.579-1.203 1.526ZM79.23 12.445a2.133 2.133 0 1 1 4.247 0 2.132 2.132 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.57-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.349 1.349 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.315-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM93.515 9.074v1.142h.976v.748h-.976v2.316c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.028-.322.043-.484.045-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.748h.715V9.074h.89ZM95.705 8.437h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.807 1.485 1.485 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.719-.335-1.083-.963-1.083a1.05 1.05 0 0 0-1.134 1.141v2.63h-.888v-6.26ZM104.761 13.482a1.823 1.823 0 0 1-1.951 1.302 2.047 2.047 0 0 1-2.08-2.324 2.093 2.093 0 0 1 .071-.88 2.08 2.08 0 0 1 2.005-1.473c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.077 1.077 0 0 0 1.071-.545h.855Zm-3.126-1.452h2.275a1.094 1.094 0 0 0-.667-1.084 1.086 1.086 0 0 0-.442-.082 1.151 1.151 0 0 0-1.166 1.166Z'
                    ></path>
                  </svg>
                </button>
                <button className='border flex rounded-lg py-[7px] px-[11px]'>
                  <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' className='h-6 w-6 flex-none'>
                    <circle cx='12' cy='12' r='11.5' stroke='#D4D4D4'></circle>
                    <path
                      d='M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z'
                      fill='#A3A3A3'
                      stroke='#A3A3A3'
                    ></path>
                  </svg>
                  <span className='ml-2.5'>Watch the video</span>
                </button>
              </div>
            </div>
          </div>
          <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
            <div className='mt-20 -mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32'>
              <div className='relative aspect-[366/729] mx-auto max-w-[366px]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='366' height='729' fill='none'>
                  <g mask='url(#mask)'>
                    <g filter='url(#a)'>
                      <path
                        d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
                        fill='url(#b)'
                      />
                      <path
                        d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
                        fill='url(#c)'
                      />
                    </g>
                    <g filter='url(#d)'>
                      <path
                        d='M5 133.772v-21.15c0-1.359-.54-2.661-1.5-3.622-.844-.073-2.496.257-2.496 2.157v24.562c.406 2.023 2.605 2.023 2.605 2.023A6.363 6.363 0 0 0 5 133.772Z'
                        fill='url(#e)'
                      />
                      <path
                        d='M5 133.772v-21.15c0-1.359-.54-2.661-1.5-3.622-.844-.073-2.496.257-2.496 2.157v24.562c.406 2.023 2.605 2.023 2.605 2.023A6.363 6.363 0 0 0 5 133.772Z'
                        fill='url(#f)'
                        fill-opacity='.1'
                      />
                    </g>
                    <g filter='url(#g)'>
                      <path
                        d='M5 213.772v-46.15c0-1.359-.54-2.661-1.5-3.622-.844-.073-2.496.257-2.496 2.157v49.562c.406 2.023 2.605 2.023 2.605 2.023A6.363 6.363 0 0 0 5 213.772Z'
                        fill='url(#h)'
                      />
                      <path
                        d='M5 213.772v-46.15c0-1.359-.54-2.661-1.5-3.622-.844-.073-2.496.257-2.496 2.157v49.562c.406 2.023 2.605 2.023 2.605 2.023A6.363 6.363 0 0 0 5 213.772Z'
                        fill='url(#i)'
                        fill-opacity='.1'
                      />
                    </g>
                    <g filter='url(#j)'>
                      <path
                        d='M5 283.772v-46.15c0-1.359-.54-2.661-1.5-3.622-.844-.073-2.496.257-2.496 2.157v49.562c.406 2.023 2.605 2.023 2.605 2.023A6.363 6.363 0 0 0 5 283.772Z'
                        fill='url(#k)'
                      />
                      <path
                        d='M5 283.772v-46.15c0-1.359-.54-2.661-1.5-3.622-.844-.073-2.496.257-2.496 2.157v49.562c.406 2.023 2.605 2.023 2.605 2.023A6.363 6.363 0 0 0 5 283.772Z'
                        fill='url(#l)'
                        fill-opacity='.1'
                      />
                    </g>
                    <g filter='url(#m)'>
                      <path
                        d='M362.004 266.772v-78.15a5.12 5.12 0 0 1 1.5-3.622c.844-.073 2.496.257 2.496 2.157v81.562c-.406 2.023-2.605 2.023-2.605 2.023a6.359 6.359 0 0 1-1.391-3.97Z'
                        fill='url(#n)'
                      />
                      <path
                        d='M362.004 266.772v-78.15a5.12 5.12 0 0 1 1.5-3.622c.844-.073 2.496.257 2.496 2.157v81.562c-.406 2.023-2.605 2.023-2.605 2.023a6.359 6.359 0 0 1-1.391-3.97Z'
                        fill='url(#o)'
                        fill-opacity='.1'
                      />
                    </g>
                    <path
                      d='M305 14.5H59c-24.577 0-44.5 19.923-44.5 44.5v615c0 23.472 19.028 42.5 42.5 42.5h250c23.472 0 42.5-19.028 42.5-42.5V59c0-24.577-19.923-44.5-44.5-44.5Z'
                      stroke='url(#p)'
                      stroke-opacity='.5'
                    />
                    <g filter='url(#q)' shape-rendering='crispEdges'>
                      <path
                        d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
                        fill='url(#r)'
                        fill-opacity='.3'
                      />
                      <path
                        d='M305 15.5H59c-24.024 0-43.5 19.476-43.5 43.5v615c0 23.472 19.028 42.5 42.5 42.5h248c23.472 0 42.5-19.028 42.5-42.5V59c0-24.024-19.476-43.5-43.5-43.5Z'
                        stroke='#000'
                        stroke-opacity='.07'
                      />
                    </g>
                    <g filter='url(#s)'>
                      <rect x='154' y='29' width='56' height='5' rx='2.5' fill='#D4D4D4' />
                    </g>
                  </g>
                  <defs>
                    <mask id='mask'>
                      <rect width='366' height='729' fill='#fff' />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M89.728 24a4.213 4.213 0 0 1 4.213 4.212v2.527c0 10.235 8.3 18.532 18.539 18.532h139.04c10.239 0 18.539-8.297 18.539-18.532v-2.527A4.212 4.212 0 0 1 274.272 24h32.864C325.286 24 340 38.71 340 56.853v618.295c0 18.144-14.714 32.853-32.864 32.853H56.864c-18.15 0-32.864-14.709-32.864-32.853V56.853C24 38.709 38.714 24 56.864 24h32.864Z'
                        fill='#000'
                      />
                    </mask>
                    <linearGradient id='e' x1='1.004' y1='123.367' x2='5' y2='123.367' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#D4D4D4' />
                      <stop offset='1' stop-color='#E6E6E6' />
                    </linearGradient>
                    <linearGradient
                      id='f'
                      x1='3.002'
                      y1='108.991'
                      x2='3.002'
                      y2='116.75'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#171717' />
                      <stop offset='.783' stop-color='#171717' stop-opacity='0' />
                    </linearGradient>
                    <linearGradient id='h' x1='1.004' y1='190.867' x2='5' y2='190.867' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#D4D4D4' />
                      <stop offset='1' stop-color='#E6E6E6' />
                    </linearGradient>
                    <linearGradient
                      id='i'
                      x1='3.002'
                      y1='163.991'
                      x2='3.002'
                      y2='178.497'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#171717' />
                      <stop offset='.783' stop-color='#171717' stop-opacity='0' />
                    </linearGradient>
                    <linearGradient id='k' x1='1.004' y1='260.867' x2='5' y2='260.867' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#D4D4D4' />
                      <stop offset='1' stop-color='#E6E6E6' />
                    </linearGradient>
                    <linearGradient
                      id='l'
                      x1='3.002'
                      y1='233.991'
                      x2='3.002'
                      y2='248.497'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#171717' />
                      <stop offset='.783' stop-color='#171717' stop-opacity='0' />
                    </linearGradient>
                    <linearGradient id='n' x1='362.004' y1='226.25' x2='366' y2='226.25' gradientUnits='userSpaceOnUse'>
                      <stop offset='.124' stop-color='#E6E6E6' />
                      <stop offset='1' stop-color='#D4D4D4' />
                    </linearGradient>
                    <linearGradient
                      id='o'
                      x1='364.002'
                      y1='184.991'
                      x2='364.002'
                      y2='208.134'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#171717' />
                      <stop offset='.783' stop-color='#171717' stop-opacity='0' />
                    </linearGradient>
                    <linearGradient id='p' x1='182' y1='15' x2='182' y2='716' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#fff' />
                      <stop offset='.381' stop-color='#fff' stop-opacity='0' />
                    </linearGradient>
                    <filter
                      id='a'
                      x='-1'
                      y='-1'
                      width='367'
                      height='730.314'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='-2' />
                      <feGaussianBlur stdDeviation='1.5' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                      <feBlend in2='shape' result='effect1_innerShadow_104_2007' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='-2' />
                      <feGaussianBlur stdDeviation='2' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.17 0' />
                      <feBlend in2='effect1_innerShadow_104_2007' result='effect2_innerShadow_104_2007' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='2' />
                      <feGaussianBlur stdDeviation='.5' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0' />
                      <feBlend in2='effect2_innerShadow_104_2007' result='effect3_innerShadow_104_2007' />
                    </filter>
                    <filter
                      id='d'
                      x='1.004'
                      y='108.991'
                      width='4.996'
                      height='28.751'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='1' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0' />
                      <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_104_2007' />
                      <feBlend in='SourceGraphic' in2='effect1_dropShadow_104_2007' result='shape' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='-1' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
                      <feBlend in2='shape' result='effect2_innerShadow_104_2007' />
                    </filter>
                    <filter
                      id='g'
                      x='1.004'
                      y='163.991'
                      width='4.996'
                      height='53.751'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='1' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0' />
                      <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_104_2007' />
                      <feBlend in='SourceGraphic' in2='effect1_dropShadow_104_2007' result='shape' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='-1' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
                      <feBlend in2='shape' result='effect2_innerShadow_104_2007' />
                    </filter>
                    <filter
                      id='j'
                      x='1.004'
                      y='233.991'
                      width='4.996'
                      height='53.751'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='1' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0' />
                      <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_104_2007' />
                      <feBlend in='SourceGraphic' in2='effect1_dropShadow_104_2007' result='shape' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='-1' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
                      <feBlend in2='shape' result='effect2_innerShadow_104_2007' />
                    </filter>
                    <filter
                      id='m'
                      x='361.004'
                      y='184.991'
                      width='4.996'
                      height='85.751'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='-1' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0' />
                      <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_104_2007' />
                      <feBlend in='SourceGraphic' in2='effect1_dropShadow_104_2007' result='shape' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dx='1' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
                      <feBlend in2='shape' result='effect2_innerShadow_104_2007' />
                    </filter>
                    <filter
                      id='q'
                      x='15'
                      y='15'
                      width='334'
                      height='703'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='1' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
                      <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_104_2007' />
                      <feBlend in='SourceGraphic' in2='effect1_dropShadow_104_2007' result='shape' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='1' />
                      <feGaussianBlur stdDeviation='2.5' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0' />
                      <feBlend in2='shape' result='effect2_innerShadow_104_2007' />
                    </filter>
                    <filter
                      id='s'
                      x='154'
                      y='29'
                      width='56'
                      height='6'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='1' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0' />
                      <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_104_2007' />
                      <feBlend in='SourceGraphic' in2='effect1_dropShadow_104_2007' result='shape' />
                      <feColorMatrix
                        in='SourceAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='1' />
                      <feGaussianBlur stdDeviation='.5' />
                      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                      <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0' />
                      <feBlend in2='shape' result='effect2_innerShadow_104_2007' />
                    </filter>
                    <radialGradient
                      id='b'
                      cx='0'
                      cy='0'
                      r='1'
                      gradientUnits='userSpaceOnUse'
                      gradientTransform='matrix(0 727 -642 0 184 1)'
                    >
                      <stop stop-color='#FAFAFA' />
                      <stop offset='1' stop-color='#E6E6E6' />
                    </radialGradient>
                    <radialGradient
                      id='c'
                      cx='0'
                      cy='0'
                      r='1'
                      gradientUnits='userSpaceOnUse'
                      gradientTransform='matrix(0 319 -295.5 0 183.5 1)'
                    >
                      <stop stop-color='#fff' />
                      <stop offset='.533' stop-color='#fff' stop-opacity='0' />
                    </radialGradient>
                    <radialGradient
                      id='r'
                      cx='0'
                      cy='0'
                      r='1'
                      gradientUnits='userSpaceOnUse'
                      gradientTransform='matrix(0 689 -326.783 0 182 27)'
                    >
                      <stop offset='.319' stop-color='#D4D4D4' />
                      <stop offset='1' stop-color='#E6E6E6' />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className='relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6'>
            <p className='text-center text-sm font-semibold text-gray-900 lg:text-left'>As featured in</p>
            <ul className='mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start'>
              <li>
                <Image src='/logo1.svg' width={82} height={32} alt='' />
              </li>
              <li>
                <Image src='/logo2.svg' width={181} height={32} alt='' />
              </li>
              <li>
                <Image src='/logo3.svg' width={121} height={32} alt='' />
              </li>
              <li>
                <Image src='/logo4.svg' width={83} height={32} alt='' />
              </li>
              <li>
                <Image src='/logo5.svg' width={101} height={32} alt='' />
              </li>
              <li>
                <Image src='/logo6.svg' width={124} height={32} alt='' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
