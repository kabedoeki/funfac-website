import './WarningBanner.css'

interface WarningBannerProps {
  className?: string
}

export default function WarningBanner({ className }: WarningBannerProps) {
  return (
    <div
      className={`warning-banner${className ? ` ${className}` : ''}`}
      role="alert"
    >
      <div className="warning-banner__icon" aria-hidden="true" />
      <p className="warning-banner__text">
        CONTAINS ADULT CONTENT AROUND SEX, GORE, EXPERIMENTATION, ETC.{' '}
        <u>DO NOT ENGAGE IF YOU'RE A MINOR/UNCOMFORTABLE.</u>
      </p>
    </div>
  )
}
