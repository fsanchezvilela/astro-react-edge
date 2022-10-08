type json = string | number | boolean | null | json[] | { [key: string]: json };

type Context = {
  cookies: {
    get: (name: string) => string | null;
    set: (options: {
      name: string;
      value: string;
      expires?: number;
      domain?: string;
      path?: string;
      sameSite?: 'strict' | 'lax' | 'none';
    }) => Promise<undefined>;
    delete: (options: {
      name: string;
      url?: string;
      path?: string;
    }) => Promise<undefined>;
  };
  geo: {
    city: string;
    country: {
      code: string;
      name: string;
    };
    subdivision: {
      code: string;
      name: string;
    };
  };
  json: () => json;
  log: (values: any[]) => void;
  next: () => Promise<Response>;
  rewrite: (url: URL | string) => URL;
};

export default async (request: Request, context: Context) => {
  // Get the page content
  const response = await context.next();
  const page = await response.text();

  // Search for the placeholder
  const regex = /COUNTRYNAME/i;

  // Replace the content
  const countryName = context.geo?.country?.name || 'somewhere in the world';

  const updatedPage = page.replace(regex, countryName);
  return new Response(updatedPage, response);
};
