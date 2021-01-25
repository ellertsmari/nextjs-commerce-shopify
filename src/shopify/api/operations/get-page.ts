import { ShopifyConfig, getConfig } from '..'
import type { Page } from '../../utils/types'

export type { Page }

export type GetPageResult<T extends { page?: any } = { page?: Page }> = T

export type PageVariables = {
  id: string
}

async function getPage({
  url,
  variables,
  config,
  preview,
}: {
  url?: string
  variables: PageVariables
  config?: ShopifyConfig
  preview?: boolean
}): Promise<GetPageResult> {
  config = getConfig(config)

  // TODO
  return {}
}

export default getPage
