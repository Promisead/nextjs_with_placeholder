const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'https://nexts--blog.herokuapp.com'
  : 'https://yourwebsite.com';
