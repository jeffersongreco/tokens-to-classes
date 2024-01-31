# Uai Design - Tokens to classes

## Estrutura e funcionamento

### Estrutura da pasta e tipos de tokens

Lorem ipsum

### Color tokens

#### Estrutura fixa do arquivo

```json
{
  "color": {
    "core": {
      "light": {},
      "dark": {}
    },
    "semantic": {}
  }
}
```

#### Escrevendo os tokens

Os tokens de cores são dividos entre `core` e `semantic`. Em core temos as cores básicas do sistema, com um valor hexadecimal. E core é divido entre `light` e `dark` onde os mesmos tokens se repetem e seus valores correspondem a cada tema. Já em semantic usamos o core em tokens nomeados com significado, com o contexto em que serão usados na UI, com valor que corresponde ao caminho da cor core em kebab-case. Exemplo:

```json
{
  "color": {
    "core": {
      "light": {
        "neutral": {
          "opaque": {
            "0": "#ffffff",
            "30": "#fbfbfbff"
          }
        }
      },
      "dark": {
        "neutral": {
          "opaque": {
            "0": "#ffffff",
            "30": "#040404FF"
          }
        }
      }
    },
    "semantic": {
      "surface": {
        "0": "neutral-opaque-0",
        "1": "neutral-opaque-30"
      }
    }
  }
}
```

#### Saída

As `cores core` terão seus valores preservados e estarão prontas para `dark mode` por meio do media query `prefers-color-scheme`. As `cores semantic` se tornarão referências às variaveis das cores core. Exemplo:

```css
:root {
  --uai-color-core-neutral-opaque-0: #ffffff;
  --uai-color-core-neutral-opaque-30: #fbfbfbff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --uai-color-core-neutral-opaque-0: #ffffff;
    --uai-color-core-neutral-opaque-30: #040404FF;
  }
}

:root {
  --uai-color-semantic-surface-0: var(--uai-color-core-neutral-opaque-0);
  --uai-color-semantic-surface-1: var(--uai-color-core-neutral-opaque-30);
}
```

### Dimension tokens

#### Estrutura fixa do arquivo:

```json
{
  "dimension": {}
}
```

#### Escrevendo os tokens

Os valores são strings com os números `em pixel` sem "px". Exemplo:

```json
{
  "dimension": {
    "majorScale": {
      "1": "4",
      "2": "8"
    },
    "minorScale": {
      "1": "2",
      "2": "4"
    }
  }
}
```

#### Saída

Os valores de dimension serão `convertidos em rem` usando `16px` como base font size. Exemplo:

```css
:root {
  --uai-dimension-major-1: 0.25rem;
  --uai-dimension-major-2: 0.5rem;
  --uai-dimension-minor-1: 0.125rem;
  --uai-dimension-minor-2: 0.25rem;
}
```

d

d

d

d

d

d

d

d

d

d
