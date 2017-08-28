import {
  ACCENT_COLORS,
  MUTED_COLOR,
  TEXT_COLOR
} from '../styles/global';

const placeholderImage = 'https://placeholdit.imgix.net/' +
  '~text?txtsize=24' +
  `&bg=${MUTED_COLOR.replace('#', '')}` +
  `&txtclr=${TEXT_COLOR.replace('#', '')}` +
  '&w=350&h=350&txttrack=0&txt=Placeholder+Image+';

const content = [
  '初期設定を始めます。',
  '管理者情報を入力してください。',
  '店舗情報を入力してください。',
  'ログイン情報を入力してください。'
];

export default content.map((message, i) => ({
  message,
  color: '#fff',
  backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
  uri: `${placeholderImage}${i + 1}`
}));
