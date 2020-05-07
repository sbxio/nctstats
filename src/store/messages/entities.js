export class MessageBlock {
  constructor(message) {
    this.timestamp = Date.now();
    this.message = message;
    this.block_number = message.data.number;
  }
}

export class MessageEvent {
  constructor(message) {
    this.timestamp = Date.now();
    this.message = message;
    this.block_number = message.block_number;
    this.txhash = message.txhash;
  }
}

export class MessageBounty extends MessageEvent {
  constructor(message) {
    super(message);

    this.guid = message.data.guid;
    this.author = message.data.author;
    this.amount = message.data.amount / Math.pow(10, 18);
  }
}

export class MessageAssertion extends MessageEvent {
  constructor(message) {
    super(message);

    this.bounty_guid = message.data.bounty_guid;
    this.author = message.data.author;
    this.bid = message.data.bid / Math.pow(10, 18);
  }
}

export class MessageReveal extends MessageEvent {
  constructor(message) {
    super(message);

    this.bounty_guid = message.data.bounty_guid;
    this.author = message.data.author;
    this.verdict = message.data.verdicts[0];
  }
}

export class MessageSettled extends MessageEvent {
  constructor(message) {
    super(message);

    this.bounty_guid = message.data.bounty_guid;
    this.payout = message.data.payout / Math.pow(10, 18);
  }
}
