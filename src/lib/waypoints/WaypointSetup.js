import "waypoints/lib/noframework.waypoints.min.js";

export function WaypointSetup({
  element = "",
  handler = (direction) => {
    // notify(this.element.id + " triggers at " + this.triggerPoint);
    console.log(direction);
  },
  offset = 0,
}) {
  return new Waypoint({
    element: document.querySelector(element),
    handler: handler,
    offset: offset,
  });
}
