import { Switch, Match, createSignal, type Component } from 'solid-js'

const MATCH_PREF = {
  FIRST: "first",
  NEXT: "next"
} as const;
type MatchPref = (typeof MATCH_PREF)[keyof typeof MATCH_PREF]

const ALPHA_KEYS = {
  A: 65,
  S: 83,
  D: 68,
  F: 70
} as const
type AlphaKeys = (typeof ALPHA_KEYS)[keyof typeof ALPHA_KEYS]

const FILE_NAMES = {
  MAIN: 'main.ts',
  HTML: 'index.html',
  CSS: 'styles.css',
  SPEC: 'main.spec.ts',
  HELPER: 'main_helper.ts'
} as const
type FileNames = (typeof FILE_NAMES)[keyof typeof FILE_NAMES]

export const MatchPref: Component<{ matchPref: MatchPref }> = (props) => {

  const [b, bb] = createSignal<FileNames>(FILE_NAMES.MAIN)
  const [c, cc] = createSignal<FileNames>()

  const qwer = (e: KeyboardEvent) => {
    if (e.keyCode === 70) return bb(b() === FILE_NAMES.MAIN && props.matchPref !== MATCH_PREF.FIRST ? FILE_NAMES.HELPER : FILE_NAMES.MAIN)
    if (e.keyCode === 68) return bb(FILE_NAMES.HTML)
    if (e.keyCode === 83) return bb(FILE_NAMES.CSS)
    if (e.keyCode === 65) return bb(FILE_NAMES.SPEC)
    console.log(e.keyCode)
  }
  const asdf = () => { addEventListener('keyup', qwer) }
  const zxcv = () => { removeEventListener('keyup', qwer) }

  return <div class="rounded-md border-2 border-zinc-200 opacity-60 hover:opacity-100" onMouseEnter={asdf} onMouseLeave={zxcv}>
    <div class="flex">
      {
        Object.values(FILE_NAMES).map(x =>
          (<a class=" px-4 cursor-pointer" classList={{ 'text-zinc-900 bg-zinc-200': b() === x }} onClick={() => bb(x)}>{x}</a>)
        )
      }
    </div>
    <div class="flex flex-col p-4 gap-2 ">
      <Switch>
        <Match when={b() === FILE_NAMES.MAIN}>

        </Match>
        <Match when={b() === FILE_NAMES.HTML}>
          {`<html>
              <head></head>
              <body>
                <main></main>
              </body>
            </html>`}
        </Match>
        <Match when={b() === FILE_NAMES.CSS}>
        </Match>
        <Match when={b() === FILE_NAMES.SPEC}>
        </Match>
        <Match when={b() === FILE_NAMES.HELPER}>
        </Match>
      </Switch>
    </div>
  </div >
}
