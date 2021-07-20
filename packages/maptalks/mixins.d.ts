interface Constructor<T = {}> {
  new(...args: any[]): T;
}

export declare function mixins<A1 extends Constructor, A2 extends Constructor>(mix1: A1, mix2: A2): {
  new(...args: any[]): (InstanceType<A1> & InstanceType<A2>)
} & A1 & A2;

export declare function mixins<
  A1 extends Constructor,
  A2 extends Constructor,
  A3 extends Constructor
>(mix1: A1, mix2: A2, mix3: A3): {
  new(...args: any[]): (InstanceType<A1> & InstanceType<A2> & InstanceType<A3>)
} & A1 & A2 & A3;

export declare function mixins<
  A1 extends Constructor,
  A2 extends Constructor,
  A3 extends Constructor,
  A4 extends Constructor,
>(mix1: A1, mix2: A2, mix3: A3, mix4: A4): {
  new(...args: any[]): (InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4>)
} & A1 & A2 & A3 & A4;
