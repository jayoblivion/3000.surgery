export const metadata = {
  title: 'Sounds | 3000',
};

import Sounds from './SoundsClient'
import StudioSounds from './StudioSounds'

export default function SoundsPage() {
  return (
    <>
      {/* 기존 하드코딩된 카드들 */}
      <Sounds />

      {/* 스튜디오에서 불러온 카드들 */}
      <StudioSounds />
    </>
  )
}
