import type { HookFetcher } from '@commerce/utils/types'
import type { SwrOptions } from '@commerce/utils/use-data'
import useCommerceCustomer from '@commerce/use-customer'

const defaultOpts = {}

export type Customer = {
  entityId: number
  firstName: string
  lastName: string
  email: string
}
export type CustomerData = {}

export const fetcher: HookFetcher<Customer | null> = async () => {
  return null
}

export function extendHook(
  customFetcher: typeof fetcher,
  swrOptions?: SwrOptions<Customer | null>
) {
  const useCustomer = () => {
    return { data: null }
  }

  useCustomer.extend = extendHook

  return useCustomer
}

export default extendHook(fetcher)
