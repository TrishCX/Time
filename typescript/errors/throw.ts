interface Options {
  title: string;
  verbose?: boolean;
  message: string;
}

export default function throwError(options: Options) {
  const message = `${options.title}\n- ${options.message}`;
  throw new Error(message);
}
