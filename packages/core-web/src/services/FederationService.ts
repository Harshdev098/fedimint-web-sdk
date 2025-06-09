import type { GetOperationResponse, JSONValue, lastSeenRequest } from '../types'
import { WorkerClient } from '../worker'

export class FederationService {
  constructor(private client: WorkerClient) {}

  async getConfig() {
    return await this.client.rpcSingle('', 'get_config', {})
  }

  async getFederationId() {
    return await this.client.rpcSingle<string>('', 'get_federation_id', {})
  }

  async getInviteCode(peer: number = 0) {
    return await this.client.rpcSingle<string | null>('', 'get_invite_code', {
      peer,
    })
  }

  async listOperations(
    limit?: number,
    last_seen?: lastSeenRequest,
  ): Promise<JSONValue[]> {
    return await this.client.rpcSingle<JSONValue[]>('', 'list_operations', {
      limit: limit ?? null,
      last_seen: last_seen ?? null,
    })
  }

  async getOperation(operationId: string) {
    return await this.client.rpcSingle<GetOperationResponse>(
      '',
      'get_operation',
      { operation_id: operationId },
    )
  }
}
