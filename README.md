# Stardew Valley — Página de producto (Nintendo Switch)

Página web tipo ficha de producto para **Stardew Valley** en Nintendo Switch. Inspirada en el sitio oficial de Nintendo, incluye carrusel de imágenes, información de compra y descripción del juego con “Read more”.

---

## Contenido del proyecto

- **Header**: logo Nintendo, navegación (Games, Nintendo Switch, News & Events), Support, Wishlist, Cart.
- **Hero**:
  - **Carrusel** (izquierda): 7 imágenes del juego con controles ‹ › y dots. Clic en una imagen abre lightbox.
  - **Info** (derecha): Nintendo Switch, título, precio $14.99, botón “Direct download”.
- **Descripción del juego**:
  - **Texto** (izquierda): sinopsis, párrafo sobre multijugador (expandible) y enlace “Read more” / “Read less” con icono +.
  - **Imagen** (derecha): arte principal de Stardew Valley.
- **Footer**: © Nintendo.
- **Lightbox**: al hacer clic en una imagen del carrusel se muestra en grande; clic en el fondo la cierra.

---

## Estructura de archivos

```
Taller_1/
├── index.html      # Maquetado HTML
├── styles.css      # Estilos
├── script.js       # Carrusel, lightbox, Read more
├── README.md       # Este archivo
└── assets/
    ├── Stardew_Valley_image1.avif … image7.avif
    └── ESRB_10_logo.svg
```

---

## Cómo ejecutar

1. Clona o descarga el proyecto.
2. Abre `index.html` en un navegador (doble clic o arrastrar al navegador).

No hace falta servidor; funciona en `file://`. Si usas un servidor local (por ejemplo Live Server en VS Code), también funcionará.

---

## Tecnologías

- **HTML5**
- **CSS3** (Grid, Flexbox, transiciones, media queries)
- **JavaScript** (vanilla, sin frameworks)

---

## Responsive

- **Desktop**: dos columnas (carrusel | info y texto | imagen).
- **Móvil (&lt; 768px)**: una columna; carrusel e imagen de descripción arriba, contenido debajo.

---

## Funcionalidades implementadas

| Función        | Descripción                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Carrusel       | Avanzar/retroceder por slide, dots clicables, transición suave, una imagen por vez. |
| Lightbox       | Clic en imagen del carrusel → vista ampliada; clic fuera → cerrar.          |
| Read more      | Muestra/oculta el texto de multijugador; icono + rota al expandir; “Read more” / “Read less”. |
| Dropdowns      | Menús desplegables en Games y Nintendo Switch (hover).                      |

---

## Autor

Taller 1 — Aplicaciones Móviles.
