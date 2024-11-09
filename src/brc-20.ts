import {
  Approval as ApprovalEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/BRC20/BRC20"
import {
  Approval,
  EIP712DomainChanged,
  OwnershipTransferred,
  Transfer
} from "../generated/schema"

// Handler for the Approval event
export function handleApproval(event: ApprovalEvent): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32()); // Unique ID
  let entity = new Approval(id);

  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

// Handler for the EIP712DomainChanged event
export function handleEIP712DomainChanged(event: EIP712DomainChangedEvent): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32()); // Unique ID
  let entity = new EIP712DomainChanged(id);

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

// Handler for the OwnershipTransferred event
export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32()); // Unique ID
  let entity = new OwnershipTransferred(id);

  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

// Handler for the Transfer event
export function handleTransfer(event: TransferEvent): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32()); // Unique ID
  let entity = new Transfer(id);

  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
