import React from 'react'
import { AlertCircle, AlertTriangle, Info, CheckCircle2, Flame } from 'lucide-react'

const alertStyles = {
  note: {
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-300 dark:border-blue-700',
    icon: <Info className="h-5 w-5 text-blue-500 dark:text-blue-400" aria-hidden="true" />,
  },
  warning: {
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-300 dark:border-yellow-700',
    icon: (
      <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" aria-hidden="true" />
    ),
  },
  tip: {
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-300 dark:border-green-700',
    icon: (
      <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" aria-hidden="true" />
    ),
  },
  important: {
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    borderColor: 'border-purple-300 dark:border-purple-700',
    icon: (
      <AlertCircle className="h-5 w-5 text-purple-500 dark:text-purple-400" aria-hidden="true" />
    ),
  },
  caution: {
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-300 dark:border-red-700',
    icon: <Flame className="h-5 w-5 text-red-500 dark:text-red-400" aria-hidden="true" />,
  },
}

function GitHubAlert({ type, title, children }) {
  const { bgColor, borderColor, icon } = alertStyles[type]

  return (
    <div className={`rounded-md ${bgColor} mb-4 p-4`}>
      <div className={`flex border-l-4 ${borderColor} pl-4`}>
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3 flex-1">
          {title && (
            <h3
              className={`text-sm font-medium capitalize ${
                type === 'caution'
                  ? 'text-red-800 dark:text-red-200'
                  : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              {type}: {title}
            </h3>
          )}
          <div
            className={`text-sm ${
              type === 'caution'
                ? 'text-red-700 dark:text-red-200'
                : 'text-gray-700 dark:text-gray-300'
            } mt-2`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubAlert
