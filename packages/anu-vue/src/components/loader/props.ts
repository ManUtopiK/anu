import type { ExtractPropTypes } from 'vue'
import { typographyProps } from '@/components/typography/props'

export const loaderProps = {
  ...typographyProps,

  /**
   * Toggle loading state
   */
  loading: {
    type: Boolean,
    default: true,
  },

  /**
   * Set overlay to use ALoader inside component
   */
  overlay: {
    type: Boolean,
    default: false,
  },

  /**
   * Display loader in full page mode
   */
  fullPage: {
    type: Boolean,
    default: false,
  },
}

export type LoaderProps = ExtractPropTypes<typeof loaderProps>
