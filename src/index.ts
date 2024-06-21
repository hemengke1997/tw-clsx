import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function classnames(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

const classNames = classnames
const cn = classnames

export { classNames, classnames, cn }
export default classnames
