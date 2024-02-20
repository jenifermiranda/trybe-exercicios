import time

import pytest


@pytest.mark.slow
def test_slow_marker():
    time.sleep(4)


#CMD pytest -m MARKEXPR