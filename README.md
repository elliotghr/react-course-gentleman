# REACT Course

## ¿Cuándo usar React vs un framework?

React surge como una alternativa al CSR (Client Side Rendering) tradicional, o tambien llmada SPA, que tiene problemas de SEO y tiempos de carga lentos. React permite construir interfaces de usuario de manera más eficiente y dinámica, mejorando la experiencia del usuario.

React es una librería de JavaScript par generar aplicaciones basadas en componentes reutilizables. A diferencia de los frameworks completos como Angular o Vue, React se enfoca principalmente en la capa de vista (UI) y deja otras responsabilidades, como el manejo del estado y las rutas, a bibliotecas adicionales.

React es un conjunto de librerías, por eso, conviene usarlo para proyectos que requieran:

- Aplicaciones a la medida
  - Dado que podemos elegir las librerías que mejor se adapten a nuestras necesidades, podemos crear aplicaciones altamente personalizadas.
- Simplicidad
- Minimiza el peso
  - A diferencia de frameworks más pesados, React permite construir aplicaciones ligeras y rápidas.
- Prototipado rápido
  - Permite crear prototipos de interfaces de usuario rápidamente, facilitando la iteración y el feedback.
- SPA
  - React es ideal para aplicaciones de una sola página, donde la experiencia del usuario es fluida y rápida. CSR, el browser renderiza la aplicación en el cliente, lo que mejora la velocidad de carga y la interactividad.
  - Privacidad, ya que no necesitamos que el proyecto esté disponible al público.

### Frameworks de React

- **SolidJS**: Un framework minimalista que se enfoca en la simplicidad y la eficiencia, ideal para proyectos pequeños y medianos.
  - Reactividad Real (signals)
  - Contra: No hay trabajo.
- **\*Next.js**: Un framework completo que ofrece renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y muchas otras características listas para usar, ideal para aplicaciones más grandes y complejas.
  - Necesito SEO?
  - Necesito todo lo que brinda?
  - Contra: Tiene su forma de pensar diferente, sus soluciones son solo SSR y SSG.
- **Remix**: Un framework que se centra en la experiencia del desarrollador y la optimización del rendimiento, ideal para aplicaciones web modernas.
  - Neceisito SEO?
  - Performance?
  - Data Fetching?
  - Routing?
  - Comodo?
  - Contra: No hay trabajo.
