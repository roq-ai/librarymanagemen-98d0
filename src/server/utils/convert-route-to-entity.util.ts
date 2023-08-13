const mapping: Record<string, string> = {
  books: 'book',
  bookings: 'booking',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
