# Assignment 6 — jQuery (Selectors, Effects, Animations)

**Name:** Azamat Askar  
**Group:** IT-2503

## About the Project

This static portfolio demonstrates jQuery selectors, effects, DOM manipulation and animations. It follows the visual structure of Assignment 5: a dark header and navigation, a grey background, rounded white cards, simple black and grey buttons, and a footer at the bottom. The content is about 1100px wide, with two columns on desktop and one on smaller screens.

The interests are Coding, Sports, Music and Reading. Favorite music, movie and subject descriptions are clearly marked as editable examples. Skill percentages are demonstration values, not assessed proficiency. The social links lead to public homepages, not personal accounts.

## Technologies

- HTML5 and CSS3
- Bootstrap 5.3.8 CSS via CDN (layout, buttons and form classes)
- jQuery 3.7.1, full build via CDN (including effects and animations)
- JavaScript, with no framework, build process or backend
- Two original local SVG illustrations

## How to Run

1. Keep `index.html`, `style.css`, `script.js` and `assets/` together.
2. Open `index.html` in a modern browser by double-clicking it. A local server is optional.
3. Keep an internet connection available for the Bootstrap and jQuery CDNs.
4. Open Developer Tools → Console to see `jQuery is ready!`.

If the loading notice remains visible, check your internet connection and whether the jQuery CDN is blocked, then reload. Changes to skills, theme, form values and effect states are temporary and reset when the page reloads.

## Part 1. Getting Started with jQuery

### Task 0. Setup

`index.html` loads jQuery before `script.js`. All application logic is wrapped in `$(document).ready(function() { ... })`, so the HTML is available before selectors run. The callback logs the exact message `jQuery is ready!` and hides the loading notice.

**Screenshot TODO:** Open the page and Developer Tools → Console. Capture the actual console showing `jQuery is ready!` and save it as `screenshots/task-0-console.png`. Add the image below this description after creating it.

### Task 1. Selectors & CSS

The profile contains my name, group, introduction and interests. The page title is “Welcome to My Portfolio”. Three selectors demonstrate different selection types:

- `$('h3')`: a tag selector changes heading letter spacing using `.css()`.
- `$('#headline')`: an ID selector replaces the headline using `.text()`.
- `$('.group-label')`: a class selector changes font weight using `.css()`.

Light Theme and Dark Theme call `setTheme()`. It uses `.toggleClass()` to choose CSS color variables and `.attr()` to update `aria-pressed`. Colors cover cards, labels, links, inputs, panels and secondary text.

<img width="1092" height="798" alt="image" src="https://github.com/user-attachments/assets/d8c9704e-9875-4a0a-b8b1-ae9f258dd0fb" />
<img width="1134" height="830" alt="image" src="https://github.com/user-attachments/assets/d5cf5040-65bb-4884-92df-5117cbff5973" />


## Part 2. jQuery Effects

### Task 2. Visibility Methods

About Me contains an introduction, the status “Currently learning jQuery!” and learning goals. Hide, Show and Toggle call `.hide()`, `.show()` and `.toggle()` on `#aboutDetails`. The controls remain outside the hidden block, allowing it to be restored.

<img width="1156" height="834" alt="image" src="https://github.com/user-attachments/assets/5c6f72ba-f9a4-4841-8816-967cad73490a" />
<img width="1138" height="800" alt="image" src="https://github.com/user-attachments/assets/ab83f5b1-0268-4ea0-971d-9fe47d8d7e1d" />


### Task 3. Fade Methods

The gallery displays two original SVG illustrations from `assets/images/`, with descriptive alt text and captions. Fade In, Fade Out and Fade Toggle use `.fadeIn(400)`, `.fadeOut(400)` and `.fadeToggle(400)` on the gallery wrapper. `.stop(true, true)` clears pending effects and finishes the current effect before starting another. Controls remain available when the gallery is hidden.

<img width="1164" height="860" alt="image" src="https://github.com/user-attachments/assets/35775f8f-401c-42b2-8f17-5febb94dc28f" />
<img width="1148" height="838" alt="image" src="https://github.com/user-attachments/assets/ccc68f51-5ee1-4b3e-a02c-d809481dae4b" />
<img width="1172" height="758" alt="image" src="https://github.com/user-attachments/assets/445170ce-02e7-4dea-9f7b-ffffc32e78ef" />


### Task 4. Slide Methods

My Favorite Music, My Favorite Movie and My Favorite Subject are keyboard-accessible buttons controlling three separate panels. Each button uses `aria-controls` and `aria-expanded`. Clicking a heading calls `.slideToggle(300)`. Expand All calls `.slideDown(300)` and Collapse All calls `.slideUp(300)`. Each handler updates the buttons' expanded state and plus/minus indicator. `.stop(true, true)` prevents queued transitions.

<img width="1142" height="756" alt="image" src="https://github.com/user-attachments/assets/05249879-1e92-4cc6-bd22-be6ca6070882" />
<img width="1104" height="1076" alt="image" src="https://github.com/user-attachments/assets/0c44683b-dd00-425f-ad73-0de030447eac" />


## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements

The initial list contains HTML, CSS, JavaScript and jQuery. The helper `addSkill(atStart)` reads `.val().trim()`, rejects empty input, and creates a new element using `$('<li>').text(skill)`. User input is always treated as text, so markup cannot be inserted through the input field.

- Add Skill uses `.append()` to add to the end.
- Prepend Skill uses `.prepend()` to add to the start.
- Remove Skill selects the last item with `.last()` and removes it with `.remove()`.

Removing from an empty list displays a message. A live status paragraph reports successful actions and validation errors. Invalid input receives `aria-invalid="true"` and focus returns to the input.

<img width="2256" height="1010" alt="image" src="https://github.com/user-attachments/assets/70d75529-6741-4f43-9f43-c8684ed1c6dd" />
<img width="2268" height="1000" alt="image" src="https://github.com/user-attachments/assets/1cf04aee-cf3e-418b-ab36-9ff625695b4b" />
<img width="2282" height="992" alt="image" src="https://github.com/user-attachments/assets/a1c0f9d8-57fd-4854-b021-cd63ec44099e" />

### Task 6. Modifying Attributes

Change Link reads the current `href` with `.attr()` and switches between `https://github.com/` and `https://www.linkedin.com/`. It also changes the visible label using `.text()` and displays the destination below the button. The link uses `target="_blank"` with `rel="noopener noreferrer"`.

<img width="1132" height="676" alt="image" src="https://github.com/user-attachments/assets/6412b354-b3c3-4c69-b8d1-41622fc4ff24" />
<img width="1112" height="670" alt="image" src="https://github.com/user-attachments/assets/181180ee-5766-4dd7-beee-022a202e81c3" />


### Task 7. Form Interaction

The Name and Email inputs have associated labels. An `input` event handler reads both fields with `.val()` and updates the preview using `.text()`. This event handles typing, pasting and deletion. Empty fields show “Not entered”. A `submit` handler calls `event.preventDefault()` so the form does not navigate or send data to a server.

<img width="1164" height="914" alt="image" src="https://github.com/user-attachments/assets/ac9f65ee-c4bb-4362-891d-8bfc8dc1c864" />
<img width="1166" height="886" alt="image" src="https://github.com/user-attachments/assets/4460fa39-f7d4-405e-b33f-035c38811b65" />


## Part 4. Animations

### Task 8. Basic Animation

The skill list continues with three bars for HTML, CSS and JavaScript. Each starts at `width: 0`. The `skillsExpanded` Boolean stores the intended state. Animate My Skills toggles it on every click. `.each()` reads each bar's `data-target` and `.animate()` changes its width to 90%, 75% and 60%, or back to 0%.

`.stop(true, true)` clears animation queues and finishes the current transition before starting the next one. The progress callback updates `aria-valuenow`, and the completion callback sets its exact final value. The button exposes its state with `aria-pressed`, while labels identify the targets as demonstration values. No CSS animations replace the required jQuery effects.

<img width="1222" height="998" alt="image" src="https://github.com/user-attachments/assets/19ec081f-913b-4722-b7b5-7f235b53ddef" />

## Verification Status

The JavaScript syntax check (`node --check script.js`) passed. Static checks cover duplicate IDs, local asset paths, selector references, script order, required jQuery methods, and the Task 0–8 comment sections. They do not prove browser behavior.

Browser automation was attempted but blocked: the browser connector was unavailable, and the Windows UI tool could not determine the active browser URL confidently. No browser screenshots were produced. The TODO entries above intentionally contain no Markdown image links to missing files.

Before submission, perform these browser checks and replace the screenshot TODOs with real images:

1. Confirm the console readiness message and no JavaScript or failed-resource errors.
2. Repeat Hide → Show → Toggle several times. Confirm controls remain visible.
3. Repeat Fade Out → Fade In → Fade Toggle, including rapid clicks.
4. Toggle each favorite heading using both mouse and keyboard; test Expand All and Collapse All repeatedly and inspect `aria-expanded`.
5. Append a skill and prepend a different skill. Check ordering, trimming and removal of the last item. Try empty input and spaces. Remove all items and click Remove Skill again.
6. Enter `<b>Test</b>` as a skill and confirm it appears as literal text, not bold HTML.
7. Change Link twice and inspect the actual `href` values.
8. Type, paste and delete Name and Email values. Confirm immediate preview and no navigation on Enter.
9. Animate bars to their targets and back to zero. Click rapidly several times, wait for completion, and check the final state agrees with the button's `aria-pressed`.
10. Inspect both themes, including fields, panels, buttons and links, at approximately 375px, 768px and 1440px viewport widths. Check for horizontal overflow, clipping and inaccessible controls. Save real responsive screenshots if useful.

## Summary of Work Process

I used the Assignment 6 requirements and the visual structure of Assignment 5 to build a new static portfolio. I created the layout and two SVG illustrations, then organized `script.js` into Task 0–8 sections. I implemented the required selectors, effects, safe list updates, attribute changes, input preview and skill animations with jQuery. I added readable light/dark themes, keyboard-accessible controls and status messages. Syntax and static checks were performed; browser checks and screenshots remain pending because browser automation was blocked.

## Publishing with GitHub Pages

Publishing is a manual step; this project has not been uploaded or deployed.

1. Create a **public** GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, `assets/` and the completed `screenshots/` folder to its root, preserving paths and filename case.
3. In the repository's Pages settings, select deployment from a branch, choose the branch containing these files and its root folder, and save.
4. Wait for deployment, open the actual published URL provided by GitHub, and repeat the browser checks there.
5. Replace the placeholders below with the real repository and site links.
6. Submit both links as required and attend the mandatory defense. A local project alone is not a completed submission.

**Repository URL:** TODO — add the real public repository URL.  
**GitHub Pages URL:** TODO — add the actual deployed site URL.

## Files

```text
index.html
style.css
script.js
README.md
assets/images/coding.svg
assets/images/music.svg
```
