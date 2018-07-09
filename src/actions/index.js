// action types

export const FORWARD = 'FORWARD';
export const BACKWARD = 'BACKWARD';

// action creators

export function moveForward(value) {
  return {
    type: FORWARD,
    value
  };
}

export function moveBackward(value) {
  return {
    type: BACKWARD,
    value
  };
}
