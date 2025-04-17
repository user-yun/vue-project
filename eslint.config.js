import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
    languageOptions: { globals: { process: true } },
    // 下面的配置好像不管用

    rules: {
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'no-unused-vars': 'off', // // 不能有声明后未被使用的变量
      'no-unreachable': 'off', // 禁止自动删除多个return
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符

      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    },
  },
]
