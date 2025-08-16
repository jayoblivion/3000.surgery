'use client';

import { useState } from 'react';

export default function Sounds() {
  const [tab, setTab] = useState<'mixtape' | 'demo' | 'remix'>('mixtape');

  return (
    <main style={{ padding: '2rem', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2rem' }}>Sounds</h1>

      {/* 탭 메뉴 */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '2rem',
        paddingBottom: '0.5rem'
      }}>
        {['mixtape', 'demo', 'remix'].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key as 'mixtape' | 'demo' | 'remix')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontSize: '1rem',
              fontWeight: tab === key ? 600 : 400,
              color: tab === key ? '#000' : '#888',
              borderBottom: tab === key ? '2px solid #000' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'color 0.3s ease, border-bottom 0.3s ease'
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* MIXTAPE 콘텐츠 */}
{tab === 'mixtape' && (
  <section>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Mixtape</h2>

{/* 코요테라디오 카드 */}
<div style={{
  borderRadius: '8px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  marginBottom: '3rem',
  padding: '1rem',
  backgroundColor: '#f9f9f9'
}}>
<h3
  style={{
    fontSize: '1.125rem',
    fontWeight: 600,
    marginTop: 0,
    marginBottom: '1.25rem',
    color: '#111',
    lineHeight: '1.6',
  }}
>
  코요테라디오 Coyote Radio
</h3>


  {/* YouTube */}
  <div style={{ marginBottom: '1.5rem' }}>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/nNeg1gH8LiI"
      title="Coyote Radio (YouTube)"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        borderRadius: '8px',
        width: '100%',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}
    />
  </div>

  {/* SoundCloud */}
  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jiyo3000/coyoteradio&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    style={{
      borderRadius: '8px',
      width: '100%',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      marginBottom: '1.5rem'
    }}
  />

  {/* 가사 */}
<p style={{ whiteSpace: 'pre-wrap', fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
  {`아니 내가 진짜 원래 이런 사람은 아냐
가진 게 많이 없을 땐 원래 다 이러지 않나
사람 새끼냐니 말이 너무 심한 거 아냐
근데 나는 괜찮지
왜냐면 얘 말은 틀린 게 하나도 업쏘
나는 어저께 정신 판매 완료
네고사절
난 이제 집에 가야 된다고
해 뜨는 게 너는 안 보여
검은자가 커서 그런가
아침엔 밀린 빨래하고 널고 해야지
검은 옷이 없어
그럼 내가 너를 못 만나
특이한 취향이야
난 자주 뭘 흘리지
마지막 한 대 필까
첫차 시간 됐지 이미
꼴이 먼지 쌓인 차 같아
여긴 존나 강원랜드
내가 여길 왜 다시 와
난 충분해 해 봤음 됐지
time stays we leave
time stays you leave
time stays Im here
떠 있지 호수 위에
boys in a dream
circle yang and yin
순간들은 invincible
너무 많이 가진 건 없는 거랑 똑같지
so I get myself lost
바랬던 거 다 했어
I made this lake into sea
침댄 알래스카 꿈은 사하라
흐려지는 바다
난 꿈 꿀 때 항상 자각
모든 사랑 모든 fuck
모든 싸움 모든 이별
끊기지 않는 테잎
가위 오길 기다릴 때야
모든 그리운 사람들은 오직 아침 다 돼서 자면 꾸는 악몽에만 나오지
alright
time stays we leave
time stays you leave
time stays Im here
떠 있지 호수 위에
노인 됐다 태아
blurry circles going square
알람이 울릴 때야
time stay Ill be back real quick
pedal to the metal
양치할 때 흘린 피
딱 그만큼만 보고 복귀해야지
내 spaceship
꿈에서 와서 향해 꿈
내 고향은 시간에
공간은 환상일 뿐
맘 빼고 믿지 않네
맘 빼고 믿지 않네
my circles my pain
맘 빼고 믿지 않네
my circles
my
어디 좀 다녀와
사실 난 홈
꺾히고 밟혀 만다라 꽃
조각난 어제 몬드리아노
몰라 다 buzzin
spliff I roll
Red star 왼팔에
문라잇 문라잇
취해 적어 헤밍웨이
no 뱅상 뱅상 뻑잇
괜찮아 꽤 작게 말했잖아
대개 다 그래
빨갱이같이 피해 난 대로
대학생 사이 my Kangol
앱상 잭칵 쿠엘보
재검수 폐기더미 메모
이해 안 돼
재조립 패스워드
Papa Oscar Tango
쓰리피스 입은 시청 아저씨들 시합은
주름 지면 종각에 보행기들 기 싸움
난 기다려 빈 차를
줄이 너무 길다
강변북로 red light white light
오른편 왼편 메세나 한강
빛이 없다면 피를 보게 될까나
괜찮아
해는 빨갛지
어차피 한 번은 봐야 됐어
취재하듯 돌아다닌 서울시 온마이크 스탠바이
여기저기 토한 자리 영역표시
Im like Banksy
on my lines to
on my lanes
인생은 다 transit
나는 환승
넌 도착
복잡하고 엉망인 매듭
끝 안 나는 생각 끝에
bell beep
외로울 시간 땡 치면 무한궤도
빈차 앞에 첫차
돌아갈리 없던 거야 그린 대론
Pots or med?
아님 glass?
나 그냥 자야돼서 그래
넌 how bout self care
다들 그래
그러다가 어떤날은 날 찾아
well go find yourself
봤음 얼마나 봤냐고
갔으면 어디까지 가셨을까
너무 많은 걸 바라고
난 혼자인 건 딱히 안 좋아
너 정이 뭔지 알아
나도 잘 모르긴 하는데
적당한 거리에서 나오더라
못나보여 가까울 땐
팔 좀 빼자
언제 가는데
the fuck is wrong
the fuck you want
니 남친 얘기 그냥 가서 해
좋겠네
찢었다 붙여 봐
확인 받고 싶지 항상 그게 사람 마음
보고싶은 거랑 사랑
너 걍 죽어봐
네 머리부터 발끝
letem burn
dont letem sleep
너 지금 사람 안 믿는다 말했니
언제 올 거야
오는 중이긴 한 거니
라면 다 불겠다 좀 와
문자 전화는 다 씹어 삼켰네
다 먹게 둘거야
혹시 금방 지나쳤니
어떻게 내가 이사를 가
침대 아래
방구석 모서리
베란다에 있나
아님 식탁 밑
멍하니 찾고 있어 홀린 듯
바람인 척 다녀갔다는 그런 이야
어디야
ㄱㄷㄱㄷㄱㄷ
전화 받아
ㅜㅜㅜㅜㅜㅜㅜ
머리가 아파 자꾸 지끈 지끈
ㄱㅊ
내 심장 아톰하트ㅋㅋ
ㅋㅋ
ㅜㅜㅜㅜㅜㅜㅜ
울 엄마 문자
문장마다 끝에 붙여놨네
작은 물결 하나
나는 물에 잠긴 기분이었다가
햇빛 보러 타
2호선 물레방아
ㅜㅜㅜㅜㅜㅜㅜ
나는 죽은 사람처럼 굴지 말자 하곤
Cyanide on the Google bar
난 거울을 봐
울어 봤다가
웃어 봐
ㅜㅜㅜㅜㅜㅜㅜ
But 서울시
You should‘ve love me
else you got to murder me
But 서울시
You should’ve love me
Else you got to murder me
어디야
ㄱㄷㄱㄷㄱㄷ
전화 받아
ㅜㅜㅜㅜㅜㅜㅜ
머리가 아파 자꾸 지끈 지끈
ㄱㅊ
내 심장 아톰하트ㅋㅋ
ㅋㅋ
ㅜㅜㅜㅜㅜㅜㅜ
내가 좀 이랬다 저랬다 하지
알기는 알아
너네 집에도 뭐 죄다 씨유 박힌 우산
찍다가 얻어 걸리는 건
작업도 마찬가지
주제 안 잡고 써
난 모르지만 얜 아니까
우울하누
한 줄 적어놓구
몇 시간 뻐기다 보면 전부 끝나있는 거
예
네 주사 네 버릇
뭐 어떤들 또 어때
너 나보다 날 더 알지
나도 그만큼 딱 봤어
예
똑똑한 척하는 애들보다는 나은가
침묵하고 뇌는 빼고 우린 조석 같아
하다 말다 자꾸 뭔데
그래 맘이란 게 그래
집에 가면 되는 건데 삼천포로 항상
도착하면 전화하란 말은 걱정 같아
그래 이것도 봐봐
자존심이 허락 안하지
믿어 딴 짓은 안 해 못 해
뜨고 피고 아네모네
채점지는 아이언맨 핑거 스냅
아톰하트
울 엄마 문자
문장마다 끝에 붙여놨네
작은 물결 하나
나는 물에 잠긴 기분이었다가
햇빛 보러 타
2호선 물레방아
ㅜㅜㅜㅜㅜㅜㅜ
나는 죽은 사람처럼 굴지 말자 하곤
Cyanide on the google bar
난 거울을 봐
울어 봤다가
웃어 봐
ㅜㅜㅜㅜㅜㅜㅜ
어디야
ㄱㄷㄱㄷㄱㄷ
전화 받아
ㅜㅜㅜㅜㅜㅜㅜ
머리가 아파 자꾸 지끈 지끈
ㄱㅊ
내 심장 아톰하트ㅋㅋ
ㅋㅋ
ㅜㅜㅜㅜㅜㅜㅜ
But 서울시
You shouldve love me
else you got to murder me
But 서울시
You shouldve love me
Else you got to murder me
Sweet
야자수 사이
Im finding one to kill
Sometimes Im scared this is all I will ever be
여기 평생 있고 말지라고 말했지 같이
Just swim
Surfing with the skateboard
In the void I cant avoid
In the void I cant avoid
In the void I cant avoid
In the void I cant avoid
거짓말은 자주 못 해
기억력이 나쁘거든
너랑 잔 건 안 걸렸지
기억력이 나쁘다고
나는 하기 싫어
나이만 먹은 나쁜 어른
새끼손가락 다 걸곤
꿈에서는 달걀 얼굴
까먹어줘 마른 모습
나도 까먹도록 할게
귀신 눈알 하는 버릇
얘기 끝났음 꺼져
애기 잘 시간 임박
얼른 가야 돼 놀러
이리저리 왔다 갔다
헤이헤이헤이헤이헤이
이런 저런 얘기 하다 말다
헤이헤이
Sweet
야자수 사이
Im finding one to kill
Sometimes Im scared this is all I will ever be
여기 평생 있고 말지라고 말했지 같이
Just swim
Surfing with the skateboard
이리저리 왔다 갔다
헤이헤이헤이헤이헤이
이런 저런 얘기 하다 말다
헤이헤이
I like the stories
Your sin
I like salivas you spit
I love your tears with a smile
I love how you crumble these cookies
네 맘 한구석에 빈
그건 빛난단 뜻이지
텅 빈 나를 좀 봐
내 모든 문장은 가볍지
I like the things you regret
I like mercies on yourself
Love your phone call with your mom
I love the way you sing along
Black Skirt
H0liay things
Su
너의 입버릇 같은
대체 왜 사랑하냐는 그런 거
난 이해가 잘 안 돼
네가 자주 하는 어려운 말들
몰라
모르니까 사랑이겠지
이유가 있음 그게 사랑이겠니
하루종일 tuning same song
비나 정말 많이 내렸으면 좋겠네
장을 한 달째 안 봤어
쓰레기장이 된 내 집
메비우스
틴트 묻은 꽁초
if its just a breeze
너는 정말 태풍이지
매일 매일이 battle field
싸울 이윤 이제 없지
벨트 없는 링
안 치워볼까 이 집
몰라
그냥 어떻게든 살아지겠지
네가 없이 무슨 꿈을 꾸겠니
사람은 정말 이상하고
사랑이었는지조차도 모르겠고
이 노랠 하루종일 쳐 틀어놨어
뭔 놈의 플리를 울어제끼는 소음들로 채워놨네
십게이같은 우울증 환자들이랑 노는걸
진작에 막았어야 됐나보다
걔네 다 허튼짓 못 하게
어디 가둬놔야 돼 진짜
무슨 정신 나간 핀 빠진 수류탄 같은 자식들
우울한 게 감투야 감투 아주
옆 사람은 없어 안중에
너의 팀 버튼 타투
아대로 가린 육학년 자국
Well suck it
suck 네 1리터짜리 눈물
몰라
그냥 어떻게든 살아지겠지
네가 없이 무슨 꿈을 꾸겠니
몰라
그냥 어떻게든 사라지겠지
네가 없이 무슨 꿈을 꾸겠니
Bars 마치 mercy from the Benzo
라이터 잇어도없어 Back off
센 척은 됐고 나는 원해
진자 센거
watch ur step bro
clinic never gonna tell your status
How bout Range Rov
82년 수프라
다 집어치우고 이륙
천장구경 비행중
당근발 홈데코s
입국심사 on the corsa
them rock
Drag fucks talkin race
박힌 돌 꿈 깨울 땐데
같은말만 하는 다른 100 bars
fuck this mercy from the benzo
this is rose lifestyle
꺼져 내 입버릇
fat old yall fighters
시선 머리부터발끝
watch your step
dont touch my bag
내 bitch taste
절대 못까주지
아마 이런 bars can never even 그랜져
역시 돈이고 겉멋
나를 깨운거
화학작용이 재우면 그제야 나 쓰다듬지
안먹는날만 외로운것도
아픈거랑은 다른얘기
pots and med
아님 glass
so bars my own mercy from the Benzo
향하는우드스탁
거리엔 배기음
가는 길에 꿈 되새겨
결국 다 연결돼있는 피흘린가벼운맘
Im fethup
Bar my mercy from the Benzo
라이터 잇어도없어 Back off
옆에 정장아재 엔카
폰기울여 숨긴 메모장
drink
pop and smoke routines
난 흩어져 모자이크
출근해야지 씨발
이어져있지
헤쳐나가고나발이고
움직이는 시체
자러가야지
so time stays we leave
Hold my hands and sing for me
When it all goes ups and downs
Im down for unfamiliar things
So dont be upset when it feels far
Every sign brings us to king
But worlds like water filled in crown
Open up your mind and see
People spilling whole their lives`}
  </p>
</div>

  </section>
)}
      {/* DEMO 콘텐츠 */}
      {tab === 'demo' && (
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Demo</h2>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2101820277&color=%2383b4df&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1690796700&color=%23b4acc4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1651851801&color=%23730404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1633062432&color=%23808080&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1438222603%3Fsecret_token%3Ds-XMW2jCvfKIy&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2101827831&color=%23ececec&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />
        </section>
      )}

      {/* REMIX 콘텐츠 */}
      {/* Remix 콘텐츠 */}
{tab === 'remix' && (
  <section>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Remix</h2>

    {/* only kryptonite remix 카드 */}
    <div style={{
      borderRadius: '8px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginBottom: '3rem',
      padding: '1rem',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{
        fontSize: '1.125rem',
        fontWeight: 600,
        marginTop: 0,
        marginBottom: '1.25rem',
        color: '#111',
        lineHeight: '1.6'
      }}>
        only kryptonite<br />
        <span style={{ fontWeight: 400 }}>
          (don toliver, doja cat - lose my mind [From F1® The Movie] remix)
        </span>
      </h3>

      {/* YouTube */}
      <div style={{ marginBottom: '1.5rem' }}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/BdMwi-is8Bw"
          title="only kryptonite remix (YouTube)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: '8px',
            width: '100%',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* SoundCloud */}
      <iframe
  width="100%"
  height="166"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jiyo3000/onlykryptonite&color=%23FF0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  style={{
    borderRadius: '8px',
    width: '100%',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
  }}
/>
    </div>
  </section>
)}
    </main>
  );
}
