import { Transfer, Approval } from '../generated/Gem/Gem'
import { Transfertx } from '../generated/schema'

export function handleTransfer(event: Transfer): void {
  let id = event.params.to
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())

  let transfertx = new Transfertx(id)

  transfertx.from = event.params.from
  transfertx.to = event.params.to
  transfertx.value = event.params.value

  transfertx.transaction = event.transaction.hash
  transfertx.blockNumber = event.block.number
  transfertx.blockTimestamp = event.block.timestamp

  transfertx.save()
}

export function handleApproval(event: Approval): void {
  let id = event.params.owner
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())

  let transfertx = new Transfertx(id)

  transfertx.from = event.params.owner
  transfertx.to = event.params.spender
  transfertx.value = event.params.value

  transfertx.transaction = event.transaction.hash
  transfertx.blockNumber = event.block.number
  transfertx.blockTimestamp = event.block.timestamp

  transfertx.save()
}