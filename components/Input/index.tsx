import dynamic from 'next/dynamic'

export const InputNumber = dynamic(() => import('./InputNumber'))
export const InputText = dynamic(() => import('./InputText'))
