// @ts-check

// eslint-disable-next-line import/no-extraneous-dependencies
// import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// export default tseslint.config(
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended,
// );

export default tseslint.config(...tseslint.configs.recommended);