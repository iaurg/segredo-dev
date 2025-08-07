---
title: Como fazer o RD Station pegar informações do popup do Elementor
slug: rd-station-popup-elementor
description: 'O RD Station não envia leads corretamente dentro de formulário no popup do Elementor, veja como resolver.'
date: '2025-07-29T11:55:50.000Z'
tags: ['rdstation', 'elementor', 'wordpress']
image: ./rdstation-popup-elementor.jpg
authors: ['iaurg']
---

Neste post vou explicar para você como resolver o problema do RD Station não receber os leads enviados através de um formulário do Elementor dentro de um popup.

## O problema

O RD Station não envia os leads corretamente quando o formulário do Elementor está dentro de um popup. Isso acontece porque o script do RD Station só identifica os formulários que estão carregados na página no momento em que o script é executado. Quando o formulário está dentro de um popup, ele não é carregado até que o popup seja aberto, e por isso o RD Station não consegue identificar o formulário.

## Como resolver

Dentro do popup do Elementor, você pode adicionar um código JavaScript que recarrega o formulário do RD Station quando o popup é aberto utilizando um bloco de HTML do Elementor, o código a seguir faz isso:

```html
<script>
function onPopupOpen() {
  console.log("Popup foi aberto, recarregando RD Station Forms...");

  // Valida se o RD Station Forms Integration object está disponível (código do RD Global)
  if (window.RdstationFormsIntegration) {
    RdstationFormsIntegration.Integration.integrateAll("seu-id-token-form-station");
    console.log("RD Station forms recarregado!");
  } else {
    console.warn("RdstationFormsIntegration não encontrado.");
  }
}

// Carrega esta função quando o popup do Elementor é aberto
onPopupOpen();
</script>
```

Certifique-se de substituir `"seu-id-token-form-station"` pelo seu ID do token do formulário do RD Station. Você consegue encontrar esse token no script padrão de integração do RD Station, será um link similar a este:
https://d335luupugsy2.cloudfront.net/js/loader-scripts/082daac8-xxxx-4c56-xxxx-1ee677c8e0cb-loader.js

Ao abrir este link procure pelo padrão: `{token:"86f871da0f2faf02bda4575c9cb7xxxx"}` e copie o valor do token para adicionar no script dentro do popup.

## Video com o passo a passo

<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/dxrDnng57_k?si=_FOL0Zytxqnh-nxJ"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
