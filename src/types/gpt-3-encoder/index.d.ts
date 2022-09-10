/// <reference types="node" />

declare module 'gpt-3-encoder' {
  export function encode(text: string): Buffer;
  export function decode(buffer: Buffer): string;
}